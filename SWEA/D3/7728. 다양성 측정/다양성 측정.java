import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashSet;
import java.util.Set;

public class Solution {
	// 다양성 = 숫자를 구성하는 수의 종류
	// ex) 1512 => 1, 5, 2로 구성되어 있으므로 다양성 = 3
	// 숫자가 주어졌을 때 그 숫자의 다양성을 구하시오
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		
		int T = Integer.parseInt(br.readLine());
		for(int tc=1;tc<=T;tc++) {
			Set<Character> set = new HashSet<Character>();
			String input = br.readLine();
			for(int i=0;i<input.length();i++) {
				set.add(input.charAt(i));
			}
			sb.append("#"+tc+" "+set.size()+"\n");
		}
		System.out.print(sb);
	}
}
